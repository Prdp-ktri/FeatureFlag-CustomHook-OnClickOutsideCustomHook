import GithubProfileFinder from "./components/Github-Profile";
import SearchAutocomplete from "./components/Github-Profile/Search-Autocomplete-with-API";
import featureFlagGlobalState from "./components/Feature-Flag/context";
import FeatureFlags from "./components/Feature-Flag";

export default function MenuList({ list = [] }) {
  return (
    <featureFlagGlobalState>
      <FeatureFlags />
    </featureFlagGlobalState>
  );
}
