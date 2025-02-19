import FooterColumn from "./FooterColumn";

const FooterEmergency = () => {
  return (
    <FooterColumn title="Emergency Resources">
      <ul className="space-y-2 text-gray-400">
        <li>National Crisis Line: 988</li>
        <li>Emergency: 911</li>
      </ul>
    </FooterColumn>
  );
};

export default FooterEmergency;
