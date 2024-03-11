import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import ScheduleIcon from "@mui/icons-material/Schedule";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MovieIcon from "@mui/icons-material/Movie";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-3 border-2 border-red-700 shadow-lg">
      <div className="font-medium space-y-1 border-b-2">
        <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg active">
          <span>
            <HomeIcon />
          </span>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </div>
        <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
          <span>
            <SlowMotionVideoIcon />
          </span>
          <h1>Shorts</h1>
        </div>
        <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
          <span>
            <SubscriptionsIcon />
          </span>
          <h1>Subscriptions</h1>
        </div>
      </div>
      <div className="space-y-1 mt-2  border-b-2">
        <h1 className="font-medium p-2">You &gt;</h1>
        <ul className="space-y-1 font-normal">
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <PersonIcon />
            </span>
            <li className="">Your Channel</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <HistoryIcon />
            </span>
            <li className="">History</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <SlideshowIcon />
            </span>
            <li className="">Your videos</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <ScheduleIcon />
            </span>
            <li className="">Watch later</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <KeyboardArrowDownIcon />
            </span>
            <li className="">Show more</li>
          </div>
        </ul>
      </div>
      <div className="space-y-1 mt-2  border-b-2">
        <h1 className="font-medium p-2">Explore &gt;</h1>
        <ul className="space-y-1 font-normal">
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <WhatshotIcon />
            </span>
            <li className="">Trending</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <ShoppingBagIcon />
            </span>
            <li className="">Shopping</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <MusicNoteIcon />
            </span>
            <li className="">Movies</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <MovieIcon />
            </span>
            <li className="">Music</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <WifiTetheringIcon />
            </span>
            <li className="">Live</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <SportsEsportsIcon />
            </span>
            <li className="">Gaming</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <NewspaperIcon />
            </span>
            <li className="">News</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <EmojiEventsIcon />
            </span>
            <li className="">Sports</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <LightbulbIcon />
            </span>
            <li className="">Learning</li>
          </div>
        </ul>
      </div>
      <div className="space-y-1 mt-2  border-b-2">
        <h1 className="font-medium p-2">More from YouTube &gt;</h1>
        <ul className="space-y-1 font-normal">
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <YouTubeIcon style={{ color: "#FF0000" }} />
            </span>
            <li className="">YouTube Premium</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <SubscriptionsIcon style={{ color: "#FF0000" }} />
            </span>
            <li className="">YouTube Studio</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <PlayCircleOutlineIcon style={{ color: "#FF0000" }} />
            </span>
            <li className="">YouTube Music</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span className="transform -rotate-12">
              <YouTubeIcon style={{ color: "#FF0000" }} />
            </span>
            <li className="">YouTube Kids</li>
          </div>
        </ul>
      </div>
      <div className="space-y-1 mt-2 p-1">
        <ul className="space-y-1 font-normal">
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <SettingsIcon />
            </span>
            <li className="">Settings</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <FlagIcon />
            </span>
            <li className="">Report history</li>
          </div>
          <div className="p-2 flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <HelpOutlineIcon />
            </span>
            <li className="">Help</li>
          </div>
          <div className="flex justify-start space-x-3 items-center hover:bg-slate-200 hover:rounded-lg">
            <span>
              <AnnouncementIcon />
            </span>
            <li className="p-2">Send feedback</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
