export interface Props {
  text: string;
  action: () => void;
  disabled?: boolean;
  extraClasses?: string;
}

export const Button = ({
  text,
  action,
  disabled = false,
  extraClasses,
}: Props) => {
  return (
    <button
      className={`rounded-lg px-10 py-2 border border-gray-400 font-semibold text-base  ${extraClasses}`}
      onClick={() => action()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
