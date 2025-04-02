import FooterColumn from "./FooterColumn";

const FooterContact = () => {
  return (
    <FooterColumn title="Contact">
      <ul className="space-y-2 text-white-400">
        <li>
          123 Therapy St, Suite 100
          <br />
          Los Angeles, CA 90001
        </li>
        <li>(438) 308-4595</li>
        <li>dorothy@claruspsychotherapy.com</li>
      </ul>
    </FooterColumn>
  );
};

export default FooterContact;
