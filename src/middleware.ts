import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/app/(.*)', '/studio/(.*)'],
};


const middlewareHandlers = {
  '/': async (req: NextRequest) => {
    const { nextUrl } = req
    nextUrl.pathname += 'app';
    return NextResponse.redirect(nextUrl);
   },
  '/app': async (req: NextRequest) => { },
  '/studio': async (req: NextRequest) => { },
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (middlewareHandlers[pathname]) {
    return middlewareHandlers[pathname](req)
  }
}
