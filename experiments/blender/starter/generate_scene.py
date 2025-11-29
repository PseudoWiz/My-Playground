import bpy
import math

# Delete default objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Add a plane floor
bpy.ops.mesh.primitive_plane_add(size=5)
floor = bpy.context.active_object
floor.name = "Floor"

# Add a cube
bpy.ops.mesh.primitive_cube_add(size=1)
cube = bpy.context.active_object
cube.location.z = 0.5
cube.name = "GeneratedCube"

# Add a camera
bpy.ops.object.camera_add(location=(3, -3, 2))
camera = bpy.context.active_object
camera.rotation_euler = (math.radians(60), 0, math.radians(45))

# Add a sun light
bpy.ops.object.light_add(type='SUN', location=(2, 2, 4))
light = bpy.context.active_object

print("Scene generated!")
