import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/store/(.*)', '/studio/(.*)'],
};


const middlewareHandlers = {
  '/': async (req: NextRequest) => {
    const { nextUrl } = req
    nextUrl.pathname += 'store';
    return NextResponse.redirect(nextUrl);
   },
  '/store': async (req: NextRequest) => { },
  '/studio': async (req: NextRequest) => { },
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (middlewareHandlers[pathname]) {
    return middlewareHandlers[pathname](req)
  }
}
