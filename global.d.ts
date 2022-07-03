declare global {
  interface IConfig {
    credential: {
      privateKey: string;
      clientEmail: string;
      projectId: string;
    };
  }
  interface InAuthUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
  }
}
