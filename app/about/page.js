import { redirect } from 'next/navigation';

// Old /about links now point to the matching section of the home page.
export default function Page() {
  redirect('/#about');
}
