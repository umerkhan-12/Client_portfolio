import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="container-site py-8 text-sm text-muted">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
