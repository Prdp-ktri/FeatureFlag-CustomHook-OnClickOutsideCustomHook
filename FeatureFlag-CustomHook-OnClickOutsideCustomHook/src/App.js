import GithubProfileFinder from "./components/Github-Profile";
import SearchAutocomplete from "./components/Github-Profile/Search-Autocomplete-with-API";
import featureFlagGlobalState from "./components/Feature-Flag/context";
import FeatureFlags from "./components/Feature-Flag";
import UseFetchHookTest from "./components/Feature-Flag/use-fetch/test";
import UseOnClickOutsideTest from "./components/Feature-Flag/use-outside-click/test";

export default function MenuList({ list = [] }) {
  return (
    // <featureFlagGlobalState>
    //   <FeatureFlags />
    // </featureFlagGlobalState>
    // <UseFetchHookTest />
    <UseOnClickOutsideTest/>
  );
}
