// ChapterTitle.tsx
interface ChapterTitleProps {
  id: string;
  name: string;
}

export default function ChapterTitle({ id, name }: ChapterTitleProps) {
  return (
    <h1 className="chapter-title group relative flex items-center gap-2" id={id}>
      <a
        href={`#${id}`}
        className="text-gray-400 hover:text-gray-600"
        aria-label="Copy link to this chapter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1-1M10.172 13.828a4 4 0 005.656 0l3-3a4 4 0 10-5.656-5.656l-1 1"
          />
        </svg>
      </a>
      {name}
    </h1>
  );
}