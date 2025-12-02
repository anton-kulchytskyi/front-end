import { PageHeader, EmptyState } from '@components/common';

type BreadcrumbItem = {
  label: string;
  path?: string;
};

type ProfileNotFoundProps = {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
  breadcrumbs: BreadcrumbItem[];
};

const ProfileNotFound = ({
  title,
  description,
  actionLabel,
  onAction,
  breadcrumbs,
}: ProfileNotFoundProps) => {
  return (
    <>
      <PageHeader
        title={title}
        breadcrumbs={breadcrumbs}
      />
      <EmptyState
        title={title}
        description={description}
        action={{
          label: actionLabel,
          onClick: onAction,
        }}
      />
    </>
  );
};

ProfileNotFound.displayName = 'ProfileNotFound';

export default ProfileNotFound;
