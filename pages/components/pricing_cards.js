/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
import Footer from "../../components/footer";
import pricingCardsCollections from "../../tailwind_components/pricing_cards/collection";

const PricingCards = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI | Pricing Cards</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <Navbar />

      <div className="codepen_page font-poppins">
        <p className="codepen_brief bg-sky-200 text-blue-700 md:mx-44 mx-4 px-4 mb-12 text-center py-4 rounded-2xl">
          Have cool product (Not having? believe you have) but not sure how can
          you sell/ market those pricings. Our developers have designed the best
          pricing templates, Just tweak the text and you are good to go 💰
        </p>
        {pricingCardsCollections.map((pricingCard, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">
                {index + 1}. {pricingCard.componentName}
              </h3>
              <Codepen htmlText={pricingCard.component} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default PricingCards;
