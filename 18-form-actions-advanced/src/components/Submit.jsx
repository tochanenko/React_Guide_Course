import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  
  return <p className="actions">
    <button type="submit" disable={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
  </p>
}