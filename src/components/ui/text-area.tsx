import { Button } from '@/components/ui/button'

export function TextArea() {
  return (
    <div className="max-w-[800px] bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <div className="flex space-x-2 p-2 border-b border-gray-200 dark:border-gray-800">
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Bold</span>
          <BoldIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Italic</span>
          <ItalicIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Underline</span>
          <UnderlineIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Left Align</span>
          <AlignLeftIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Center Align</span>
          <AlignCenterIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Right Align</span>
          <AlignRightIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Bulleted List</span>
          <ListIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Add Link</span>
          <LinkIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Image</span>
          <ImageIcon className="w-4 h-4" />
        </Button>
        <Button className="text-gray-600 dark:text-gray-400" variant="ghost">
          <span className="sr-only">Emoji</span>
          <SmileIcon className="w-4 h-4" />
        </Button>
      </div>
      <textarea
        className="w-full h-full p-4 text-gray-600 dark:text-gray-200 text-sm"
        placeholder="Type your text here..."
      />
    </div>
  )
}

//TODO tipar esta funcion.
function BoldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  )
}

//TODO tipar esta funcion.
function ItalicIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
}

//TODO tipar esta funcion.
function UnderlineIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  )
}

//TODO tipar esta funcion.
function AlignLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="15" x2="3" y1="12" y2="12" />
      <line x1="17" x2="3" y1="18" y2="18" />
    </svg>
  )
}

//TODO tipar esta funcion.
function AlignCenterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="17" x2="7" y1="12" y2="12" />
      <line x1="19" x2="5" y1="18" y2="18" />
    </svg>
  )
}

//TODO tipar esta funcion.
function AlignRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="21" x2="9" y1="12" y2="12" />
      <line x1="21" x2="7" y1="18" y2="18" />
    </svg>
  )
}

//TODO tipar esta funcion.
function ListIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}

//TODO tipar esta funcion.
function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

//TODO tipar esta funcion.
function ImageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}

//TODO tipar esta funcion.
function SmileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}
