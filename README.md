# README

Let's practice some more with setTimeout, this time creating a low-fidelity loading spinner.

### How this works:

- Each character is a delayed write, using setTimeout
- With each delayed write, we start with returning the cursor to the beginning
- We then write the next character in the animation
- Spaces are added after the character so that the cursor moves far enough away from our animation
    - Removing the space padding at the end of the strings will mean that the cursor will sit on top of the animation, making it harder to see
