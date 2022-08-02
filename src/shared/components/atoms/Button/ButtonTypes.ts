interface IButton {
  text: string;
  color?: string;
  size?: string;
  type?: 'submit' | 'button';
  icon?: string;
  outlined?: true | false;
}

export default IButton;
