import { GoogleAuth } from 'google-auth-library';
import { grpc } from 'google-gax';

export const SCOPES = ['https://www.googleapis.com/auth/cloud-vision']

// Combination of the below two articles 
// https://github.com/vercel/vercel/issues/749#issuecomment-766492109
// https://github.com/googleapis/nodejs-vision/issues/63#issuecomment-648338466
export async function getApiKeyCredentials() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  const sslCreds = grpc.credentials.createSsl();
  const auth = new GoogleAuth({
    scopes: SCOPES,
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  })
  const authClient = await auth.getClient();

  const credentials = grpc.credentials.combineChannelCredentials(
    sslCreds,
    grpc.credentials.createFromGoogleCredential(authClient)
  );
  return credentials;
}