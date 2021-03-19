import { processImage } from "../shared/processImage";

export default function Home({ imageUrl, data }) {
  return (
    <div>
      <div>Google Vision API with credentials</div>
      <hr />
      <div>
        <h3>Image</h3>
        <img width="500px" src={imageUrl} />
      </div>
      <hr />
      <h3>Data</h3>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const imageUrl =
    query.image ??
    "http://i3.kym-cdn.com/photos/images/facebook/000/242/592/1c8.jpg";
  const data = await processImage(imageUrl);

  return {
    props: {
      imageUrl,
      data,
    },
  };
}
