"use client";
import { styled } from "styled-components";

export default function ZPattern() {
  return (
    <StyledZPattern>
      <PlaceholderImg1 />
      <PlaceholderText1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        suscipit quos libero laborum, eveniet itaque aperiam et dolor? Error
        tempora totam beatae quas eligendi laborum.
      </PlaceholderText1>
      <PlaceholderImg2 />
      <PlaceholderText2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        suscipit quos libero laborum, eveniet itaque aperiam et dolor? Error
        tempora totam beatae quas eligendi laborum.
      </PlaceholderText2>
      <PlaceholderImg3 />
      <PlaceholderText3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        suscipit quos libero laborum, eveniet itaque aperiam et dolor? Error
        tempora totam beatae quas eligendi laborum.
      </PlaceholderText3>
    </StyledZPattern>
  );
}

const StyledZPattern = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    "img1 text1"
    "text2 img2"
    "img3 text3";
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const PlaceholderImg1 = styled.div`
  grid-area: img1;
  height: 10rem;
  aspect-ratio: 1;
  background-color: aliceblue;
  padding: 1rem;
`;

const PlaceholderImg2 = styled(PlaceholderImg1)`
  grid-area: img2;
`;

const PlaceholderImg3 = styled(PlaceholderImg1)`
  grid-area: img3;
`;

const PlaceholderText1 = styled.p`
  grid-area: text1;
`;

const PlaceholderText2 = styled(PlaceholderText1)`
  grid-area: text2;
`;

const PlaceholderText3 = styled(PlaceholderText1)`
  grid-area: text3;
`;
