import vision from '@google-cloud/vision';
import { getApiKeyCredentials } from './getApiKeyCredentials';

export async function processImage(imagePath: string) {
  const credentials = await getApiKeyCredentials();

  const client = new vision.ImageAnnotatorClient({
    sslCreds: credentials
  });
  const [result] = await client.labelDetection(imagePath);
  
  return result;
}