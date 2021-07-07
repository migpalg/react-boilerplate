// @packages
import firebase from "firebase/app";

// @scripts
import { config } from "../config";

// @init
import "firebase/auth";

firebase.initializeApp(config.firebase);

export { firebase };
export const auth = firebase.auth();
