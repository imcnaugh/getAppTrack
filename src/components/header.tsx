import Image from 'next/image';
import { Box, Button, Divider, Link, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <Box
      component="header"
      sx={{
        padding: 3,
        bgcolor: 'primary.light',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Link component="button" onClick={() => router.push('/')}>
          <Image
            src="/Full Logo.svg"
            alt="App Track logo"
            width={400}
            height={100}
            style={{ maxWidth: 400, paddingLeft: 10, paddingRight: 10 }}
          />
        </Link>
        <Stack
          direction={{ xs: 'column', sm: 'row-reverse' }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Button variant="contained" color="success" size="large">
            Coming Soon
          </Button>
          <Link
            component="button"
            variant="h5"
            onClick={() => router.push('/documentation/getting-started')}
          >
            Documentation
          </Link>
          <Link
            component="button"
            variant="h5"
            onClick={() => router.push('/faq')}
          >
            FAQ
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
