export interface Environment {
    production: boolean;
    firebase: {
        apiKey: string;
        authDomain: string;
        databaseURL?: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    };
}


export const environment: Environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAW5Do7NcnK_RW74lhXpAlVs5sj6eOQtkM",

        authDomain: "student-management-f9264.firebaseapp.com",

        projectId: "student-management-f9264",

        storageBucket: "student-management-f9264.appspot.com",

        messagingSenderId: "336772061146",

        appId: "1:336772061146:web:97d694bbf3ee3962a052e3"

    }
};
