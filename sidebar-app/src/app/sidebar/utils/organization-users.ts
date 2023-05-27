import { InitialOrgUsers, TransformedOrgUsers } from '../models/organizations';

export class OrganizationUsersUtils {
  public static transform(orgUsers: InitialOrgUsers[]) {
    const transformedArray: TransformedOrgUsers[] = [];

    const groupByFirstLevel = orgUsers.reduce((acc, item) => {
      const [firstLevel, ...rest] = item.name.split(' / ');
      const key = firstLevel.trim();

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push({ id: item.id, name: rest.join(' / ').trim() });
      return acc;
    }, {} as { [key: string]: InitialOrgUsers[] });

    for (const key in groupByFirstLevel) {
      if (groupByFirstLevel.hasOwnProperty(key)) {
        const transformedItem: TransformedOrgUsers = { name: key };
        const nestedItems = groupByFirstLevel[key];

        if (OrganizationUsersUtils.isNotLastMember(nestedItems)) {
          transformedItem.items = OrganizationUsersUtils.transform(nestedItems);
        } else {
          transformedItem.items = nestedItems;
        }

        transformedArray.push(transformedItem);
      }
    }

    return transformedArray;
  }

  private static isNotLastMember(items: InitialOrgUsers[]) {
    return items.find((item) => item.name?.includes('/'));
  }
}
