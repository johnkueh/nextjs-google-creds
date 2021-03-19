import { processImage } from "../shared/processImage";

export default function Home(props) {
  return (
    <div>
      <div>Google Vision API with credentials</div>
      <hr />
      <div>
        Image: <img src="/jackie.png" />
      </div>
      <hr />
      <div>Data: {JSON.stringify(props.data)}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await processImage("./public/jackie.png");

  return {
    props: {
      data,
    },
  };
}
