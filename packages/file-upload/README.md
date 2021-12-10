# File Upload Gadget Example

[![Deploy Status](https://img.shields.io/github/deployments/gadget-inc/examples/Production%20%E2%80%93%20gadget-file-upload-example)](https://vercel.com/gadget/gadget-file-upload-example)

This is an example of using Gadget's file storage features in a demo Next.js project.

There's three example pages in this project:

- one that uploads files using the Gadget API, which is simple and works well for small files at `pages/index.tsx`
- one that uploads files in the background directly to cloud storage, which is a bit more work to set up but gives a better user experience, as the file uploads while they are still filling out the form, at `pages/direct.tsx`.
- one that uploads files in the background directly to cloud storage using [Uppy](https://uppy.io/), a super full featured open source file picking library, at `pages/uppy.tsx`
