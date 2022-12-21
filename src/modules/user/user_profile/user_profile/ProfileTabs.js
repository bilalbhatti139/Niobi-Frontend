import PersonalDetails from './personal-details/PersonalDetails';
import CustomTabs from '../../../shared/Tabs';
import TrueSelf from './true_self';
import SavedPublications from './saved_publications/SavedPublications';
import SavedPrograms from './saved_programs/SavedPrograms';
import Following from './following/Following';

export default function ProfileTabs(props) {
  const data = [
    {
      label: 'Personal',
      value: 'personalDetails',
      desc: (
        <PersonalDetails
          profile_data={props.profile_data}
          user_data={props.user_data}
          settings_data={props.settings_data}
          set_is_render={props.set_is_render}
        />
      )
    },
    {
      label: 'True Self',
      value: 'trueSelf',
      desc: <TrueSelf />
    },
    {
      label: 'Saved Publications',
      value: 'savedPublications',
      desc: <SavedPublications />
    },
    {
      label: 'Saved Programs',
      value: 'programs',
      desc: <SavedPrograms />
    },
    {
      label: 'Following',
      value: 'reviews',
      desc: <Following />
    }
  ];

  return <CustomTabs data={data} />;
}
