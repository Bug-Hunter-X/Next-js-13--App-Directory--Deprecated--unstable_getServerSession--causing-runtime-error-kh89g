```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Page({ params }) {
  const session = await unstable_getServerSession(authOptions);

  // ... rest of the component
}
```
This code will cause a runtime error when used in a page under the `app` directory in Next.js 13+. The `unstable_getServerSession` function is deprecated and should not be used in this context.