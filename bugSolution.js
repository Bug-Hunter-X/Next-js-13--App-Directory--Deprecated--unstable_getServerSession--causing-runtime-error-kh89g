```javascript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}
export default function Page({ session }) {
  // ... rest of the component, using the session
}
```
This solution uses `getServerSideProps` to fetch the session data server-side before rendering the page, resolving the error.