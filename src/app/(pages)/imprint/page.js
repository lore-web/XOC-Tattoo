"use client";
import { styled } from "styled-components";

import Link from "next/link";
import Head from "next/head";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import DialogModal from "@/app/components/DialogModal";
import BurgerMenuLinks from "@/app/components/BurgerMenuLinks";

import useStore from "@/hooks/useStore";

export default function ImprintPage() {
  const [isOpened] = useStore((state) => [state.isOpened]);
  return (
    <>
      <Head>
        <title>Imprint</title>
        <meta name="description" content="Impressums Seite für XOC Tattoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1>Impressum</h1>
      </Header>
      <StyledMain>
        {isOpened && (
          <DialogModal title="Menu">
            <BurgerMenuLinks />
          </DialogModal>
        )}
        <small>
          As the author of this website is a german citizen, thus this site
          itself is subject to german law, the following imprint is presented in
          german.
        </small>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          XOC @ Drawink Nerds
          <br />
          Petersburger Str. 28
          <br />
          10249 Berlin
          <br />
        </p>
        <h3>Kontakt</h3>
        <p>
          Telefon: <Link href={"tel:+4915736201164"}>+49 1573 6201164</Link>
          <br />
          E-Mail:{" "}
          <Link href={"mailto:xoctattoo@gmail.com"}>xoctattoo@gmail.com</Link>
          <br />
        </p>
        <h3>Streitbeilegungsverfahren</h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <p>
          Quelle:{" "}
          <Link href={"https://www.e-recht24.de"}>
            https://www.e-recht24.de
          </Link>
        </p>
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  width: 60%;
  min-width: 375px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;
