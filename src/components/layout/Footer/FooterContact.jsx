import FooterColumn from "./FooterColumn";

const FooterContact = () => {
  return (
    <FooterColumn title="Contact">
      <ul className="space-y-2 text-gray-400">
        <li>
          123 Therapy St, Suite 100
          <br />
          Los Angeles, CA 90001
        </li>
        <li>(555) 123-4567</li>
        <li>contact@drsarah.com</li>
      </ul>
    </FooterColumn>
  );
};

export default FooterContact;
