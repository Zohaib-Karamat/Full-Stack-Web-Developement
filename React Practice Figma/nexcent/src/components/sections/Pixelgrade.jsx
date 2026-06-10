import Button from '../ui/Button'
import dashboardIllustration from '../../assets/images/dashboard.svg'

export default function Pixelgrade() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 px-6 sm:px-12 lg:flex-row lg:px-48">
        <div className="flex w-full justify-center lg:w-80">
          <img
            src={dashboardIllustration}
            alt="People reviewing a dashboard"
            className="h-auto w-full max-w-80"
          />
        </div>

        <div className="flex w-full max-w-[460px] flex-col items-start gap-6">
          <div className="flex max-w-96 flex-col items-start gap-3">
            <h2 className="text-2xl font-semibold leading-8 text-nexcent-dark">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-[9.74px] leading-3 text-nexcent-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
              Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem
              sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium
              auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum
              pulvinar odio.
            </p>
          </div>

          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  )
}
