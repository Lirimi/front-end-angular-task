import { InitialOrgUsers, TranformedOrgUsers } from "../models/organizations";

export class OrganizationUsersUtils {
    public static transform(orgUsers: InitialOrgUsers[]): TranformedOrgUsers[] {
        return orgUsers.reduce((transformedArray: any, item) => {
            const [companyName, department, employeeName] = item.name.split(' / ');
        
            let company = transformedArray.find((c: { name: string; }) => c.name === companyName);
            if (!company) {
              company = { name: companyName, items: [] };
              transformedArray.push(company);
            }
        
            let dept = company.items.find((d: { name: string; }) => d.name === department);
            if (!dept) {
              dept = employeeName ? { name: department, items: [] } : { name: department, id: item.id };
              company.items.push(dept);
            }
            if (employeeName) {
                dept.items.push({ id: item.id, name: employeeName });
            }
        
            return transformedArray;
          }, []);
    }
}
