import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type IndustryType = {
    #manufacturing;
    #fmcg;
    #pharma;
    #coldStorage;
    #warehousing;
    #packaging;
    #engineering;
    #logistics;
    #other;
  };

  type PlotSize = {
    #sqm500;
    #sqm1000;
    #sqm2000;
    #sqm5000;
    #custom : Nat;
  };

  type InvestmentTimeline = {
    #immediate;
    #months3To6;
    #months6To12;
    #months12Plus;
  };

  type Enquiry = {
    companyName : Text;
    contactPerson : Text;
    phone : Text;
    email : Text;
    industryType : IndustryType;
    plotSize : PlotSize;
    powerRequirement : Text;
    investmentTimeline : InvestmentTimeline;
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(
    companyName : Text,
    contactPerson : Text,
    phone : Text,
    email : Text,
    industryType : IndustryType,
    plotSize : PlotSize,
    powerRequirement : Text,
    investmentTimeline : InvestmentTimeline,
  ) : async () {
    if (companyName.isEmpty() or contactPerson.isEmpty() or phone.isEmpty() or email.isEmpty() or powerRequirement.isEmpty()) {
      Runtime.trap("All fields must be filled out");
    };

    let enquiry : Enquiry = {
      companyName;
      contactPerson;
      phone;
      email;
      industryType;
      plotSize;
      powerRequirement;
      investmentTimeline;
    };

    enquiries.add(enquiry);
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    enquiries.toArray();
  };
};
