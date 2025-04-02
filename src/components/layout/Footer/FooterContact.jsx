import FooterColumn from "./FooterColumn";

const FooterContact = () => {
  return (
    <FooterColumn title="Contact">
      <ul className="space-y-2 text-white-400">
        <li>
          404 McArthur Ave
          <br />
          Ottawa, ON K1K 1G8
        </li>
        <li>(438) 308-4595</li>
        <li>dorothy@claruspsychotherapy.com</li>
      </ul>
    </FooterColumn>
  );
};

export default FooterContact;
