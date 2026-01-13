import 'express-session';

declare module 'express-session' {
  interface SessionData {
    // Add any custom session data properties here if needed
    sessionId: string;
  }
}

declare module 'express' {
  interface Request {
    sessionID: string;
  }
}
