/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import Footer from "../../components/footer";
import storeButtonCollections from "../../tailwind_components/store_buttons/collection";

const Forms = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI | Store Buttons</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="codepen_page font-poppins">
        <p className="codepen_brief bg-sky-200 text-blue-700 md:mx-44 mx-4 px-4 mb-12 text-center py-4 rounded-2xl">
          These components can be used in footer and contact pages to showcase
          your social/ company cards 😎
        </p>
        {storeButtonCollections.map((storeButton, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">{storeButton.componentName}</h3>
              <Codepen htmlText={storeButton.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Forms;
