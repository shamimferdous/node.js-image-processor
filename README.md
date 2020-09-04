So I am working on this project where I need tons of dummy images. Talking about five hundred minimum. And all of these images needs be in { 
    exact same height-width format, 
    properly cropped, 
    optimized for web, 
    renamed in certain manner,
    }

So basically I needed some sorta image processor where i'll just put the link to an image and it'll automatically perform all of the above mentioned tasks and save it in a folder for me.

I used sharp earlier in some of my projects so it was the obvious choice for me. It's nice and fast and got all the things I need. But obviously it doesn't accept urls as input.

For this I'm using axios. It's helping me to get the image arrayBuffer. Then coverting it to raw binary buffer and feeding directly through sharp. 