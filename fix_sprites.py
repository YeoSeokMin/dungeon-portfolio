from PIL import Image
import os

def fix_sprite_sheet(input_path, output_path, frame_width=32, frame_height=32, num_frames=6):
    """
    Fix sprite sheet by centering each frame's content
    """
    img = Image.open(input_path).convert("RGBA")

    # Create new image
    new_img = Image.new("RGBA", (frame_width * num_frames, frame_height), (0, 0, 0, 0))

    for i in range(num_frames):
        # Extract frame
        left = i * frame_width
        frame = img.crop((left, 0, left + frame_width, frame_height))

        # Find bounding box of non-transparent pixels
        bbox = frame.getbbox()

        if bbox:
            # Get the character content
            content = frame.crop(bbox)
            content_width = bbox[2] - bbox[0]
            content_height = bbox[3] - bbox[1]

            # Calculate position to center horizontally, keep vertical position consistent
            # Use the same vertical offset as first frame for consistency
            new_x = (frame_width - content_width) // 2
            new_y = frame_height - content_height - 2  # 2px from bottom

            # Create new frame with centered content
            new_frame = Image.new("RGBA", (frame_width, frame_height), (0, 0, 0, 0))
            new_frame.paste(content, (new_x, new_y))

            # Paste to output
            new_img.paste(new_frame, (i * frame_width, 0))

    new_img.save(output_path)
    print(f"Fixed: {output_path}")

# Process walk and idle sprites
base_path = "public/assets/character"

# Backup and fix walk.png
walk_path = os.path.join(base_path, "walk.png")
walk_fixed_path = os.path.join(base_path, "walk.png")
walk_backup_path = os.path.join(base_path, "walk_original.png")

if os.path.exists(walk_path):
    # Backup original
    img = Image.open(walk_path)
    img.save(walk_backup_path)
    print(f"Backup: {walk_backup_path}")

    # Fix sprite
    fix_sprite_sheet(walk_backup_path, walk_fixed_path)

# Backup and fix idle.png
idle_path = os.path.join(base_path, "idle.png")
idle_fixed_path = os.path.join(base_path, "idle.png")
idle_backup_path = os.path.join(base_path, "idle_original.png")

if os.path.exists(idle_path):
    # Backup original
    img = Image.open(idle_path)
    img.save(idle_backup_path)
    print(f"Backup: {idle_backup_path}")

    # Fix sprite
    fix_sprite_sheet(idle_backup_path, idle_fixed_path)

print("Done!")
