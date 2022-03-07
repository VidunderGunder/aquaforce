import { css } from "@emotion/react";
import { Box, Button, Title } from "@mantine/core";
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { colors } from "../styles/theme";

const Contact = forwardRef(function Contact(
  props: ComponentPropsWithoutRef<"div">,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      css={css`
        color: ${colors.light};
      `}
      {...props}
    >
      <Title
        css={css`
          color: ${colors.white};
        `}
        order={3}
      >
        Contact
      </Title>
      <Box
        css={css`
          padding-top: 1rem;
          display: grid;
          grid-gap: 0.25rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        `}
      >
        <Button
          fullWidth
          component={"a"}
          rel="noopener norefferer"
          target="_blank"
          href="mailto:kristiankramas@outlook.com,amkleven@gmail.com?subject=Aquaforce"
          leftIcon={<FiMail size={20} />}
        >
          Mail
        </Button>
        <Button
          fullWidth
          component={"a"}
          rel="noopener norefferer"
          target="_blank"
          href="tel:+4795157097"
          leftIcon={<AiOutlinePhone size={20} />}
        >
          Call
        </Button>
        <Button
          fullWidth
          component={"a"}
          rel="noopener norefferer"
          target="_blank"
          href="sms:+4795157097"
          leftIcon={<BiMessageDetail size={20} />}
        >
          SMS
        </Button>
      </Box>
    </div>
  );
});

export default Contact;
