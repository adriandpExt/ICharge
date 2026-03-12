import { Banner, PageContainer } from "@/components";
import { Label } from "@/components/ui/label";

const IScreen = () => {
  return (
    <>
      <Banner title="IScreen">
        <div className="flex flex-col items-center space-y-16">
          <Label variant="subtitle" className="text-white">
            This is a test page for IScreen brochure, coming soon!
          </Label>
        </div>
      </Banner>

      <section id="iscreen">
        <PageContainer>
          <p>Hello!</p>
        </PageContainer>
      </section>
    </>
  );
};

export default IScreen;
