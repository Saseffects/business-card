import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from './UserCardImage.module.css';
import { IconBrandYoutubeFilled, IconBrandTwitchFilled, IconBrandInstagramFilled } from '@tabler/icons-react';

const stats = [
  { value: '3.7K', label: 'Twitch Followers', icon: <IconBrandTwitchFilled size={24} /> },
  { value: '13.1K', label: 'YouTube Subscribers', icon: <IconBrandTwitchFilled size={24} /> },
  { value: '1.6K', label: 'Posts', icon: <IconBrandTwitchFilled size={24} /> },
];
export default function BusinessCard() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {/* {stat.value} */}
        {stat.icon}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Saseffects
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Twitch Streamer • Special Effects Makeup Artist
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button fullWidth radius="md" mt="xl" size="md" variant="default">
        Follow
      </Button>
    </Card>
  );

  // return (

  //   <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
  //     <Avatar
  //       src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
  //       size={120}
  //       radius={120}
  //       mx="auto"
  //     />
  //     <Text ta="center" fz="lg" fw={500} mt="md">
  //       Saseffects
  //     </Text>
  //     <Text ta="center" c="dimmed" fz="sm">
  //       Twitch Streamer • Special Effects Makeup Artist 
  //     </Text>
  //     <Text ta="center" mt="lg">
  //     I'm Sas! I'm an Australian Twitch streamer and special effects makeup artist who focuses on creating fun horror content! I started my career on YouTube in 2012 then started streaming on Twitch in 2017. I provide spooky entertainment filled with monster/character makeup looks, horror gaming, and never-ending chatting with my chaotic, supportive community.
  //     </Text>
  //     <Text ta="center" mt="lg">
  //     I'm available for sponsored streams, sponsored posts, and long-term partnerships with brands!
  //     </Text>
  //   </Paper>
  // );
}