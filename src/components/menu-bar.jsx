import * as React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import {
  AiFillHome,
  AiOutlineClockCircle,
  AiFillStar,
  AiOutlineDownload,
  AiFillSetting,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { FiCompass } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { GiAlarmClock } from "react-icons/gi";
import { BsFillBookmarkDashFill } from "react-icons/bs";

function TItleAndIconModel({ title, iconComponent }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      height="20px"
      width="fit-content"
      marginBottom="30px"
      css={[
        { ":hover > svg": { color: "red" } },
        { ":hover > p": { color: "white" } },
      ]}
      cursor="pointer"
    >
      <Icon as={iconComponent} color="gray" height="20px" width="20px"></Icon>
      <Text color="gray" fontSize="20px" marginLeft="10px">
        {title}
      </Text>
    </Box>
  );
}

function MenuBar() {
  return (
    <Box display="flex" flexDirection="column" margin="60px 30px 0px 30px">
      <Box display="flex" flexDirection="column">
        <Text color="gray" fontSize="large" marginBottom="15px">
          MENU
        </Text>
        <TItleAndIconModel title="Home" iconComponent={AiFillHome} />
        <TItleAndIconModel title="Discovery" iconComponent={FiCompass} />
        <TItleAndIconModel title="Community" iconComponent={IoIosPeople} />
        <TItleAndIconModel title="Coming soon" iconComponent={GiAlarmClock} />
        <Box margin="20px 0px 40px 0px" borderBottom="1px solid gray" />
        <Text color="gray" fontSize="large" marginBottom="15px">
          LIBRARY
        </Text>
        <TItleAndIconModel
          title="Recent"
          iconComponent={AiOutlineClockCircle}
        />
        <TItleAndIconModel
          title="Bookmarked"
          iconComponent={BsFillBookmarkDashFill}
        />
        <TItleAndIconModel title="Top rated" iconComponent={AiFillStar} />
        <TItleAndIconModel
          title="Downloaded"
          iconComponent={AiOutlineDownload}
        />
        <Box margin="20px 0px 40px 0px" borderBottom="1px solid gray" />
        <TItleAndIconModel title="Settings" iconComponent={AiFillSetting} />
        <TItleAndIconModel
          title="Help"
          iconComponent={AiOutlineExclamationCircle}
        />
      </Box>
    </Box>
  );
}

export default MenuBar;
