import { Clipboard } from "lucide-react"; // Importing clipboard icon from lucide-react

interface SmallCardProps {
  title: string;
  rate: string;
  ping: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, rate, ping }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(title);
    alert(`Copied "${title}" to clipboard!`); // Optional confirmation
  };

  return (
    <div className="relative w-64 p-4 bg-[#1e1e1e] rounded-lg shadow-md border border-gray-700 hover:shadow-lg hover:border-[#00ffcc] hover:shadow-[#00ffcc33] transition-all duration-300">
      {/* Clipboard icon */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
        onClick={handleCopy}
        title="Copy to clipboard"
      >
        <Clipboard size={16} />
      </button>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-300">{title}</h3>

      {/* Rate */}
      <p className="text-sm text-gray-400">{rate} / min</p>

      {/* Ping */}
      <p className="text-sm text-gray-400">~ {ping} ms</p>
    </div>
  );
};

export default SmallCard;
