import { processImage } from "../shared/processImage";

export default function Home(props) {
  return (
    <div>
      <div>Google Vision API with credentials</div>
      <hr />
      <div>
        <h3>Image</h3>
        <img
          width="500px"
          src="https://i3.kym-cdn.com/photos/images/facebook/000/242/592/1c8.jpg"
        />
      </div>
      <hr />
      <h3>Data</h3>
      <div>{JSON.stringify(props.data)}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await processImage(
    "http://i3.kym-cdn.com/photos/images/facebook/000/242/592/1c8.jpg"
  );

  return {
    props: {
      data,
    },
  };
}
