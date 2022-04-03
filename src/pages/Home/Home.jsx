import React from "react";
import styles from "./Home.module.css"
import { HomeCard } from "../../components/Card/HomeCard";
import instantCoffeeImage from "../../assets/images/product/instant_coffee.jpg";
import ctaImage from "../../assets/images/background/w-coffee-parallax-scroll-2-opt.jpg";
import { Link } from "react-router-dom";
import {Button} from "../../components/Button/Button"
export const Home = () => {
    return (
      <>
        <header className={styles["home-header"]}>
          <div className={styles["banner-text"]}>
            <h1>A cup of coffee is what you need!</h1>
            <p>
              Coffee connects us in so many ways – to each other, to our senses,
              and to the earth that supports the coffee trees.
            </p>
          </div>
        </header>
        <main className={styles["main"]}>
          <section className={styles["main-products"]}>
            <div className={styles["products-header"]}>
              <h1>Our Products</h1>
            </div>
            <div className={styles["products-container"]}>
              <HomeCard
                header="Instant Coffee"
                content="Fresh, ready-to-go, absolutely instant coffee."
                category="Instant Coffee"
                image={instantCoffeeImage}
              />
              <HomeCard
                header="Ground Coffee"
                content="Self-made, relaxed, freshly brewed and aromatic ground coffee."
                category="Ground Coffee"
                image={instantCoffeeImage}
              />
            </div>
          </section>
          <section className={styles["main-cta"]}>
            <div className={styles["main-cta-banner"]}>
              <img
                className={styles["resp-image"]}
                src={ctaImage}
                alt="Coffee"
                srcSet=""
              />
            </div>
            <div className={styles["main-cta-content"]}>
              <h1>Let's share a cup together!</h1>
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_UTYENB.json"
                background="transparent"
                speed="1"
                style={{ width: "150px", height: "150px" }}
                loop
                autoplay
              ></lottie-player>
              <Link to="./shop">
                <Button>Shop Now</Button>
              </Link>
            </div>
          </section>
        </main>
      </>
    );
}