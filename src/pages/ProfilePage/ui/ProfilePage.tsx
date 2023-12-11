import { profileReducer } from "entities/Profile";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducerList } from "shared/lib";
import { classNames } from "shared/lib/classNames/classNames";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames("", {}, [className])}>
                {t("PROFILE PAGE")}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
