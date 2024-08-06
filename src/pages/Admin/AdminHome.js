import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/shared/Layout/Layout';
import { Box, CssBaseline, Typography } from '@mui/material';

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <Box mt={4}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h1">
            Welcome{' '}
            <Box component="span" sx={{ color: 'green' }}>
              {user?.name}
            </Box>
          </Typography>
          <Typography variant="h3">Manage Blood Bank App</Typography>
          <CssBaseline />
          <Typography mt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo animi blanditiis incidunt dicta quia, quibusdam facere corporis! Dolores, reprehenderit cum sed repellat laudantium architecto natus est nostrum accusamus, odio aspernatur minima fugiat quam molestiae nisi. Temporibus impedit dolorem quia. Distinctio modi non excepturi illo odio voluptatum quae nostrum a temporibus sequi! Explicabo, quasi consequatur ad qui quos labore distinctio voluptates alias nostrum ab dicta aspernatur molestias adipisci quibusdam error ipsa. Totam, tenetur dolores eaque tempora officiis deserunt assumenda? Rerum nemo est nihil laudantium necessitatibus. Possimus, voluptatem voluptates blanditiis quas aspernatur, quam, quaerat minus maiores ipsam sint perferendis dolor. Dignissimos voluptatem doloribus sint in quis omnis, atque neque praesentium voluptatum suscipit. Quas esse, accusantium maxime obcaecati iure officiis aperiam minus alias quod cum quos qui voluptatibus, numquam, ad id dolore odit! Minima laudantium sunt, explicabo nesciunt quos voluptatibus qui libero eligendi praesentium debitis obcaecati similique assumenda nobis labore totam dolore perferendis adipisci fugiat quibusdam tempore doloremque voluptatum accusantium. Accusamus, incidunt sequi. Esse sunt officia fuga, officiis saepe tempora repellat suscipit aliquid cupiditate perferendis, asperiores architecto molestiae rem iste eaque molestias reiciendis. Laborum modi asperiores, reprehenderit assumenda numquam, vitae exercitationem illum nesciunt, dolorum deleniti accusamus consequatur id. Necessitatibus dolore ad fugit?
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default AdminHome;