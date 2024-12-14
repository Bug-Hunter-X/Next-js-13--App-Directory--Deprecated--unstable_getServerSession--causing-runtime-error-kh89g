# Next.js 13+ App Directory: Deprecated `unstable_getServerSession` causing runtime error

This repository demonstrates a common error encountered when using the deprecated `unstable_getServerSession` function in Next.js 13+ applications within the `app` directory.  The example uses NextAuth.js for authentication.  The solution provides the correct approach using the new `getServerSession` method.

## Problem

Using `unstable_getServerSession` from `next-auth` within pages under the `app` directory results in runtime errors.  This is because `unstable_getServerSession` is deprecated and no longer functions correctly in this context.

## Solution

The correct way to get the session is to use the `getServerSession` method.

## Setup

1.  Clone this repository.
2.  Run `npm install` to install dependencies.
3.  You may need to modify the `authOptions` file to match your NextAuth.js configuration.
4.  Start the development server using `npm run dev`.