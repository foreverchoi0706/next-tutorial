import * as admin from "firebase-admin";

export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    if (
      FirebaseAdmin.instance === undefined ||
      FirebaseAdmin.instance === null
    ) {
      // 초기화 진행
      FirebaseAdmin.instance = new FirebaseAdmin();
      // 환경을 초기화한다.
      FirebaseAdmin.instance.bootstrap();
    }
    return FirebaseAdmin.instance;
  }

  private bootstrap(): void {
    const haveApp = admin.apps.length !== 0;
    if (haveApp) {
      this.init = true;
      return;
    }

    const config: IConfig = {
      credential: {
        projectId: process.env.projectId || "",
        clientEmail: process.env.clientEmail || "",
        privateKey: (process.env.privateKey || "").replace(/\\n/g, "\n"),
      },
    };
    admin.initializeApp({
      credential: admin.credential.cert(config.credential),
    });
    console.info("bootstrap firebase admin");
  }

  /** firestore를 반환 */
  public get Firestore(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.auth();
  }
}
